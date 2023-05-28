import { Image, View } from 'react-native';
import { Plus } from 'phosphor-react-native';

import { Button } from 'components/Button';
import * as S from './styles';
import { MealCard } from 'components/MealCard';
import { OverviewCard } from 'components/OverviewCard';
import { StatsCard } from 'components/StatsCard';
import { Checkbox } from 'components/Checkbox';
import { Badge } from 'components/Badge';

const Logo = require('assets/logo/Logo.png');

export const Home = () => {
  return (
    <S.Container>
      <Image source={Logo} />
      <S.ScreenTitle>Home</S.ScreenTitle>

      <View style={{ flexDirection: 'row', width: '100%' }} >
        <Badge status='positive' />
        <Badge status='negative' />
      </View>

      <View style={{ flexDirection: 'row', width: '100%' }} >
        <Checkbox text='Sim' />
        <Checkbox text='Não' variant='negative' />
      </View>

      <View style={{ flexDirection: 'row', width: '100%' }} >
        <Checkbox checked text='Sim' />
        <Checkbox checked text='Não' variant='negative' />
      </View>

      <StatsCard total={22} text='melhor sequência de pratos dentro da dieta' />
      <StatsCard total={109} text='refeições registradas' />

      <View style={{ flexDirection: 'row', width: '100%' }} >
        <StatsCard total={99} text='refeições dentro da dieta' status='positive' />
        <StatsCard total={10} text='refeições fora da dieta' status='negative' />
      </View>

      <OverviewCard percentage={90.86} />
      <OverviewCard percentage={30.21} status='negative' />

      <MealCard time='20:00' meal='X-tudo' healthy={false} />
      <MealCard time='16:00' meal='Whey protein com leite' />

      <Button
        text='Nova refeição'
        icon={() => <Plus color='white' size={18} />}
      />

      <Button
        text='Nova refeição'
        icon={() => <Plus color='black' size={18} />}
        variant='secondary'
      />
    </S.Container>
  );
};