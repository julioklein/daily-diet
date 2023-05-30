import { Button } from 'components/Button';
import { MealSavedStyleProps } from './styles';
import * as S from './styles';

const GoodMeal = require('../../../assets/illustration/GoodIllustration.png');
const BadMeal = require('../../../assets/illustration/BadIllustration.png');

export const MealSaved = ({ status = 'negative' }: MealSavedStyleProps) => {
  const Illustration = status === 'positive' ? GoodMeal : BadMeal;

  return (
    <S.Container>
      <S.Content>
        <S.Title status={status}>
          {status === 'positive' ? 'Continue assim!' : 'Que pena!'}
        </S.Title>
        {status === 'positive' ? (
          <S.Text>
            Você continua
            <S.Bold> dentro da dieta</S.Bold>
            . Muito bem!
          </S.Text>
        ) : (
          <S.Text>
            Você
            <S.Bold> saiu da dieta </S.Bold>
            dessa vez, mas continue se esforçando e não desista!
          </S.Text>
        )}

        <S.Illustration source={Illustration} />
        <Button text='Ir para a página inicial' />
      </S.Content>
    </S.Container>
  );
}