import * as React from 'react';
import { Grid, Typography, Collapse, IconButton, Box, Button } from '@material-ui/core';
import { DeleteOutline, AddOutlined, DragIndicator } from '@material-ui/icons';
import { HealthHubServiceField } from 'generated-types';
import { useFieldArray, useFormContext, FieldErrors } from 'react-hook-form';
import { DndProvider, useDrag, useDrop, XYCoord } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import QuestionFieldsValidations from '../QuestionFieldsValidations';
import QuestionFieldsGenerator from '../QuestionFieldsGenerator';
import * as Styled from './styled';
import strings from 'strings';
import { ItemTypes } from './constants';

const texts = strings.services.form.questions;

type RowProps = {
  row: HealthHubServiceField & { id: string };
  position: number;
  moveCard: (from: number, to: number) => void;
  errors: FieldErrors;
  fieldsLength: number;
  remove: (position: number) => void;
};

type DragItem = {
  index: number;
  id: string;
  type: string;
};

const cardStyles = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
} as React.CSSProperties;

function QuestionCard({
  row,
  position,
  moveCard,
  fieldsLength,
  remove,
  errors,
}: RowProps) {
  const [open, setOpen] = React.useState(Boolean(!row.label));
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if ((errors?.procedureFields || [])[position]) setOpen(true);
  }, [errors]);

  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.QUESTION_ROW,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover: (item: DragItem, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = position;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.QUESTION_ROW, id: row.id, index: position },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <React.Fragment>
      <Styled.CollapsibleRow
        ref={ref}
        style={{ opacity }}
        data-handler-id={handlerId}
        onClick={() => setOpen(!open)}
        role="row"
      >
        <div style={{ ...cardStyles }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Styled.ButtonWrapper>
              <IconButton
                aria-label={texts.table.a11y.dragAndDrop}
                size="small"
                style={{ cursor: 'move' }}
              >
                <DragIndicator />
              </IconButton>
            </Styled.ButtonWrapper>
            <Typography variant="subtitle1" id={`questions-row-${position}`}>
              {row.label}
            </Typography>
          </div>
          <Styled.ButtonWrapper
            style={{ justifyContent: 'flex-end', alignItems: 'center' }}
          >
            <IconButton
              aria-label={texts.table.a11y.remove}
              size="small"
              disabled={fieldsLength === 1}
              onClick={() => remove(position)}
            >
              <DeleteOutline />
            </IconButton>
          </Styled.ButtonWrapper>
        </div>
      </Styled.CollapsibleRow>
      <Collapse
        in={open}
        timeout="auto"
        aria-labelledby={`questions-row-${position}`}
        data-testid={`questions-row-testid`}
      >
        <Box margin={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <QuestionFieldsGenerator row={row} position={position} />
            </Grid>
            <Grid item xs={12} md={5}>
              <QuestionFieldsValidations row={row} position={position} />
            </Grid>
          </Grid>
        </Box>
      </Collapse>
    </React.Fragment>
  );
}

const CollapsibleQuestionsForm = ({ errors }: { errors: FieldErrors }) => {
  const { control } = useFormContext();
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: 'procedureFields',
  });
  const addNewQuestion = () => {
    append({
      key: '',
      label: '',
      position: fields.length + 1,
      type: 'TEXT',
      validations: { required: true },
      values: [],
    });
  };
  const moveCard = (dragIndex: number, hoverIndex: number) => {
    move(dragIndex, hoverIndex);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Styled.TitleWrapper>
          <Typography variant="h6">{texts.title}</Typography>
          <Button
            onClick={addNewQuestion}
            variant="contained"
            color="primary"
            endIcon={<AddOutlined />}
          >
            {texts.newQuestion}
          </Button>
        </Styled.TitleWrapper>
        <DndProvider backend={HTML5Backend}>
          {fields.map((item, index) => (
            <QuestionCard
              key={item.id}
              row={item as any}
              position={index}
              moveCard={moveCard}
              remove={remove}
              fieldsLength={fields.length}
              errors={errors}
            />
          ))}
        </DndProvider>
      </Grid>
    </Grid>
  );
};

export default CollapsibleQuestionsForm;
