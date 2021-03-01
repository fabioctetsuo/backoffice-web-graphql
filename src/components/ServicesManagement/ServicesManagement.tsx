import React from 'react';
import { SellerService } from 'generated-types';
import { Grid, IconButton } from '@material-ui/core';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DraggableLocation,
} from 'react-beautiful-dnd';
import { getDashedItems, getItemStyle, getListStyle, move, reorder } from './utils';
import * as Styled from './styled';
import strings from 'strings';
import { ChevronRight, Close } from '@material-ui/icons';

const texts = strings.sellers.servicesManagement;

const MIN_ITEMS = 5;

type ServicesManagerProps = {
  sellerServices?: SellerService[];
  selectedServices?: SellerService[];
  onChange(services: SellerService[]): void;
};

type Lists = {
  [key: string]: SellerService[];
};

const ServicesManagement = ({
  selectedServices,
  sellerServices,
  onChange,
}: ServicesManagerProps) => {
  const [lists, setLists] = React.useState<Lists>({
    selected: selectedServices || [],
    services:
      sellerServices?.filter(
        service =>
          !selectedServices?.map(sellerService => sellerService.id)?.includes(service.id)
      ) || [],
  });

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const reorderedList = reorder(
        lists[source.droppableId],
        source.index,
        destination.index
      );

      setLists({
        ...lists,
        [source.droppableId]: reorderedList,
      });
    } else {
      const newLists = move(
        lists[source.droppableId],
        lists[destination.droppableId],
        source,
        destination
      );

      setLists(newLists);
    }
  };

  React.useEffect(() => {
    if (lists['selected'] !== selectedServices) {
      onChange(lists['selected']);
    }
  }, [lists]);
  return (
    <Grid container>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid item xs={12} sm={3}>
          <Styled.Title>{texts.services.title}</Styled.Title>
          <Droppable droppableId="services">
            {(provided, snapshot) => (
              <Styled.ScrollContainer
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {lists.services.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <li
                        data-testid="service-item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.name}
                        <IconButton
                          aria-label="adicionar serviço"
                          color="primary"
                          size="small"
                          onClick={() => {
                            const newLists = move(
                              lists['services'],
                              lists['selected'],
                              ({
                                droppableId: 'services',
                                index,
                              } as unknown) as DraggableLocation,
                              ({
                                droppableId: 'selected',
                                index: 0,
                              } as unknown) as DraggableLocation
                            );
                            setLists(newLists);
                          }}
                          disabled={false}
                        >
                          <ChevronRight />
                        </IconButton>
                      </li>
                    )}
                  </Draggable>
                ))}
                {getDashedItems(lists.services.length, MIN_ITEMS)}
                {provided.placeholder}
              </Styled.ScrollContainer>
            )}
          </Droppable>
        </Grid>
        <Grid item sm={2} />
        <Grid item xs={12} sm={3}>
          <Styled.Title>{texts.selectedService.title}</Styled.Title>
          <Droppable droppableId="selected">
            {(provided, snapshot) => (
              <Styled.ScrollContainer
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {lists.selected.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        data-testid="selected-item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.name}
                        <IconButton
                          aria-label="remover serviço"
                          color="primary"
                          size="small"
                          onClick={() => {
                            const newLists = move(
                              lists['selected'],
                              lists['services'],
                              ({
                                droppableId: 'selected',
                                index,
                              } as unknown) as DraggableLocation,
                              ({
                                droppableId: 'services',
                                index: 0,
                              } as unknown) as DraggableLocation
                            );
                            setLists(newLists);
                          }}
                          disabled={false}
                        >
                          <Close />
                        </IconButton>
                      </div>
                    )}
                  </Draggable>
                ))}
                {getDashedItems(lists.selected.length, MIN_ITEMS)}
                {provided.placeholder}
              </Styled.ScrollContainer>
            )}
          </Droppable>
        </Grid>
      </DragDropContext>
    </Grid>
  );
};

export default ServicesManagement;
