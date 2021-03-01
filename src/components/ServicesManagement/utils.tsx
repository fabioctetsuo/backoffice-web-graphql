import { SellerService } from 'generated-types';
import { CSSProperties } from 'react';
import {
  Draggable,
  DraggableLocation,
  DraggingStyle,
  NotDraggingStyle,
} from 'react-beautiful-dnd';
import theme from 'theme';

const GRID = 8;

export const getListStyle = (isDraggingOver: boolean): CSSProperties => ({
  border: isDraggingOver ? `1px dashed ${theme.palette.primary.light}` : 'none',
  padding: GRID,
});

export const getItemStyle = (
  isDragging: boolean,
  draggableStyle?: DraggingStyle | NotDraggingStyle
): CSSProperties => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: GRID * 2,
  margin: `0 0 ${GRID}px 0`,

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  // change background colour if dragging
  background: isDragging ? theme.palette.primary.main : '#F2F5FA',

  border: isDragging ? 'none' : '1px solid #F2F5FA',
  boxSizing: 'border-box',
  borderRadius: 8,

  // text style
  fontWeight: 500,
  fontSize: 14,
  lineHeight: '24px',
  letterSpacing: 0.1,
  color: isDragging ? theme.palette.common.white : '#4E5F6F',

  // styles we need to apply on draggables
  ...draggableStyle,
});

export const getDashedItems = (length: number, minQty: number) => {
  return length <= minQty
    ? Array(minQty - length)
        .fill({})
        .map((item, index) => (
          <Draggable
            key={`fake-${index + length}`}
            draggableId={`fake-${index + length}`}
            index={index + length}
            isDragDisabled
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={{
                  ...getItemStyle(snapshot.isDragging, provided.draggableProps.style),
                  border: '1px dashed #E7EDF3',
                  background: 'none',
                  minHeight: 64,
                }}
              />
            )}
          </Draggable>
        ))
    : null;
};

// a little function to help us with reordering the result
export const reorder = (list: SellerService[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
export const move = (
  source: SellerService[],
  destination: SellerService[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);

  const [removed] = sourceClone.splice(droppableSource.index, 1);
  destClone.splice(droppableDestination.index, 0, removed);

  return {
    [droppableSource.droppableId]: sourceClone,
    [droppableDestination.droppableId]: destClone,
  };
};
