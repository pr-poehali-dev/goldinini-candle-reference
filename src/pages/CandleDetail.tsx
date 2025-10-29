import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface CandleData {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  fullDescription: string;
  ingredients: string[];
  burnTime: string;
  weight: string;
}

const candles: Record<string, CandleData> = {
  '1': {
    id: '1',
    name: 'Прогноз погоды',
    description: 'Успокаивающий аромат лимонного пирога',
    price: '1300 ₽',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/e17a7599-e115-4a40-b5de-03853d3edba5.jpg',
    fullDescription: 'Нежная свеча с ароматом свежевыпеченного лимонного пирога создаст атмосферу домашнего уюта и спокойствия. Идеально подходит для вечернего отдыха и релаксации.',
    ingredients: ['Соевый воск', 'Эфирное масло лимона', 'Натуральные ароматизаторы', 'Хлопковый фитиль'],
    burnTime: '40-45 часов',
    weight: '200 г'
  },
  '2': {
    id: '2',
    name: 'Ванильный уют',
    description: 'Тёплый сладкий аромат для домашнего комфорта',
    price: '2 490 ₽',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/a5b93351-195d-49ee-ac65-3e63fcab40a6.jpg',
    fullDescription: 'Свеча с насыщенным ароматом ванили наполнит ваш дом теплом и уютом. Сладкие ноты создадут атмосферу комфорта и безмятежности.',
    ingredients: ['Соевый воск', 'Натуральный экстракт ванили', 'Эфирные масла', 'Хлопковый фитиль'],
    burnTime: '50-55 часов',
    weight: '250 г'
  },
  '3': {
    id: '3',
    name: 'Цитрусовая свежесть',
    description: 'Бодрящий аромат апельсина и лимона',
    price: '2 490 ₽',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/75938731-724b-4352-bd6a-d6b0604d9bb0.jpg',
    fullDescription: 'Освежающая свеча с яркими цитрусовыми нотами апельсина и лимона зарядит энергией и поднимет настроение. Идеальна для утреннего пробуждения и продуктивного дня.',
    ingredients: ['Соевый воск', 'Эфирное масло апельсина', 'Эфирное масло лимона', 'Хлопковый фитиль'],
    burnTime: '50-55 часов',
    weight: '250 г'
  }
};

const CandleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const candle = id ? candles[id] : null;

  if (!candle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
          <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Назад к каталогу
        </Button>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img 
              src={candle.image}
              alt={candle.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl font-serif font-bold mb-4">{candle.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{candle.description}</p>
              <p className="text-foreground/80 leading-relaxed">{candle.fullDescription}</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Leaf" size={20} className="text-primary" />
                  Состав
                </h3>
                <ul className="space-y-2">
                  {candle.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Clock" size={18} className="text-primary" />
                      <span className="text-sm font-medium">Время горения</span>
                    </div>
                    <p className="text-muted-foreground">{candle.burnTime}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Weight" size={18} className="text-primary" />
                      <span className="text-sm font-medium">Вес</span>
                    </div>
                    <p className="text-muted-foreground">{candle.weight}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-between p-6 bg-secondary/20 rounded-lg">
              <span className="text-3xl font-bold text-primary">{candle.price}</span>
              <Button size="lg" className="text-lg px-8">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                В корзину
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandleDetail;
