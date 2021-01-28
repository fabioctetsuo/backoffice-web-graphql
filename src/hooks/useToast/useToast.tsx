import { useSnackbar } from 'notistack';

//TODO: Deixar o typescript validando o estado da mensagem
type messageTypes = 'default' | 'error' | 'success' | 'warning' | 'info';

const useToast = () => {
  const { enqueueSnackbar } = useSnackbar();

  return (message: string, type: messageTypes = 'success') => {
    enqueueSnackbar(message, {
      variant: type,
      preventDuplicate: true,
    });
  };
};

export default useToast;
