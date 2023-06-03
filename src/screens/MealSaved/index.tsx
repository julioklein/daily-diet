import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from 'components/Button';
import { MealSavedParams } from 'src/routes/app.routes';
import * as S from './styles';

const GoodMeal = require('../../../assets/illustration/GoodIllustration.png');
const BadMeal = require('../../../assets/illustration/BadIllustration.png');

export const MealSaved = () => {
  const { params } = useRoute<MealSavedParams>();
  const navigation = useNavigation();

  const handleGoToHome = () => {
    navigation.navigate('Home');
  }

  const Illustration = params?.healthy ? GoodMeal : BadMeal;

  return (
    <S.Container>
      <S.Content>
        <S.Title healthy={params?.healthy}>
          {params?.healthy ? 'Continue assim!' : 'Que pena!'}
        </S.Title>
        {params?.healthy ? (
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
        <Button onPress={handleGoToHome} text='Ir para a página inicial' />
      </S.Content>
    </S.Container>
  );
}