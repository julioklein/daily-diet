import { Modal, ModalProps } from 'react-native';
import * as S from './styles';
import { Button } from 'components/Button';

type DeleteMealModalProps = {
  onDeleteMeal: () => void;
} & ModalProps;

export const DeleteMealModal = ({
  visible = true,
  onDeleteMeal,
  onRequestClose,
  ...rest
}: DeleteMealModalProps) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      transparent
      animationType='fade'
      {...rest}
    >
      <S.Container>
        <S.Content>
          <S.Text>
            Deseja realmente excluir o registro da refeição?
          </S.Text>

          <S.ButtonContainer>
            <Button
              onPress={onRequestClose}
              text='Cancelar'
              variant='secondary'
            />

            <Button
              onPress={onDeleteMeal}
              text='Sim, exluir'
            />
          </S.ButtonContainer>
        </S.Content>
      </S.Container>
    </Modal>
  )
}