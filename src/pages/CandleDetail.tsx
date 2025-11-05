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
}

const candles: Record<string, CandleData> = {
  '1': {
    id: '1',
    name: 'Прогноз погоды',
    description: 'Успокаивающий аромат лимонного пирога',
    price: '1300 ₽',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/e17a7599-e115-4a40-b5de-03853d3edba5.jpg',
    fullDescription: 'Нежная свеча с ароматом свежевыпеченного лимонного пирога создаст атмосферу домашнего уюта и спокойствия. Идеально подходит для вечернего отдыха и релаксации.',
    ingredients: ['Соевый воск', 'Эфирное масло лимона', 'Натуральные ароматизаторы', 'Хлопковый фитиль']
  },
  '2': {
    id: '2',
    name: 'Хлопковая нежность',
    description: 'Аромат выбирается Вами из предложенных',
    price: '2 490 ₽',
    image: 'https://cdn.poehali.dev/files/dcdd400a-1ec8-4d96-b910-a45d684bc332.png',
    fullDescription: 'Изысканная свеча с рельефной текстурой, украшенная натуральными хлопковыми цветками. Создаёт атмосферу нежности и спокойствия.',
    ingredients: ['Соевый воск', 'Аромат на выбор', 'Натуральный декор', 'Хлопковый фитиль']
  },
  '3': {
    id: '3',
    name: 'Зимняя ягода',
    description: 'Аромат выбирается Вами из предложенных',
    price: '2 490 ₽',
    image: 'https://cdn.poehali.dev/files/03a56975-7aee-4225-87ed-95ac168fd738.png',
    fullDescription: 'Нежная свеча с зимним декором — красные ягоды и хлопковые цветки создают праздничное настроение. Идеальна для новогодней атмосферы.',
    ingredients: ['Соевый воск', 'Аромат на выбор', 'Натуральный декор', 'Хлопковый фитиль']
  },
  '4': {
    id: '4',
    name: 'Кружевная романтика',
    description: 'Аромат выбирается Вами из предложенных',
    price: '2 690 ₽',
    image: 'https://cdn.poehali.dev/files/50258983-2c9f-4380-8c39-ccd4cee213a1.png',
    fullDescription: 'Романтичная свеча с нежным кружевным декором и атласной лентой. Создаёт изысканную атмосферу для особых моментов.',
    ingredients: ['Соевый воск', 'Аромат на выбор', 'Кружевной декор', 'Хлопковый фитиль']
  },
  '5': {
    id: '5',
    name: 'Ракушка с жемчужинкой',
    description: 'Аромат выбирается Вами из предложенных',
    price: '2 490 ₽',
    image: 'https://cdn.poehali.dev/files/2bd4ffb2-5835-4c40-aa2b-63d3b9fa463e.png',
    fullDescription: 'Элегантная свеча в форме морской ракушки с декоративной жемчужиной. Создаёт морскую атмосферу и дарит ощущение свежести.',
    ingredients: ['Соевый воск', 'Аромат на выбор', 'Декоративные элементы', 'Хлопковый фитиль']
  },
  '6': {
    id: '6',
    name: 'Пудель',
    description: 'Аромат выбирается Вами из предложенных',
    price: '1 000 ₽',
    image: 'https://cdn.poehali.dev/files/8a4101e0-3ac4-419a-a6bc-911dd1f6369d.png',
    fullDescription: 'Уникальная фигурная свеча в форме пуделя. Вы можете выбрать любой аромат из нашей коллекции. Идеальный подарок для любителей собак.',
    ingredients: ['Соевый воск', 'Аромат на выбор', 'Безопасные красители', 'Хлопковый фитиль']
  },
  '7': {
    id: '7',
    name: 'Нежные лапки',
    description: 'Аромат выбирается Вами из предложенных',
    price: '2 490 ₽',
    image: 'https://cdn.poehali.dev/files/9a61e030-1d62-480c-96d9-bf7c6ba3cd8f.png',
    fullDescription: 'Милые фигурные свечи в форме лапок и облачка. Идеальный подарок для любителей домашних питомцев и уютной атмосферы.',
    ingredients: ['Соевый воск', 'Аромат на выбор', 'Безопасные красители', 'Хлопковый фитиль']
  },
  '8': {
    id: '8',
    name: 'Пряный апельсин',
    description: 'Аромат выбирается Вами из предложенных',
    price: '2 590 ₽',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/e17a7599-e115-4a40-b5de-03853d3edba5.jpg',
    fullDescription: 'Согревающая свеча с ароматом апельсина и корицы создаст праздничное настроение. Идеальна для холодных вечеров.',
    ingredients: ['Соевый воск', 'Эфирное масло апельсина', 'Экстракт корицы', 'Хлопковый фитиль']
  },
  '9': {
    id: '9',
    name: 'Морской бриз',
    description: 'Аромат выбирается Вами из предложенных',
    price: '2 790 ₽',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/e17a7599-e115-4a40-b5de-03853d3edba5.jpg',
    fullDescription: 'Освежающая свеча премиум-класса с интенсивным ароматом океана и морской соли. Создает атмосферу морского побережья.',
    ingredients: ['Соевый воск', 'Морские минералы премиум', 'Натуральные ароматизаторы', 'Хлопковый фитиль']
  },
  '10': {
    id: '10',
    name: 'Шоколадный соблазн',
    description: 'Аромат выбирается Вами из предложенных',
    price: '2 890 ₽',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/e17a7599-e115-4a40-b5de-03853d3edba5.jpg',
    fullDescription: 'Роскошная свеча с глубоким ароматом горького шоколада. Создает атмосферу изысканности и наслаждения.',
    ingredients: ['Соевый воск', 'Экстракт какао', 'Натуральный шоколадный аромат', 'Хлопковый фитиль']
  },
  '11': {
    id: '11',
    name: 'Сладкая карамель',
    description: 'Аромат выбирается Вами из предложенных',
    price: '2 690 ₽',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/e17a7599-e115-4a40-b5de-03853d3edba5.jpg',
    fullDescription: 'Нежная свеча с ароматом карамели и ванили создаст атмосферу сладкого уюта. Идеальна для создания домашней атмосферы.',
    ingredients: ['Соевый воск', 'Карамельный экстракт', 'Экстракт ванили', 'Хлопковый фитиль']
  },
  '12': {
    id: '12',
    name: 'Зимняя сказка',
    description: 'Аромат выбирается Вами из предложенных',
    price: '2 990 ₽',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/e17a7599-e115-4a40-b5de-03853d3edba5.jpg',
    fullDescription: 'Праздничная свеча с согревающими нотами имбиря, гвоздики и сладкого мандарина. Создает новогоднее настроение круглый год.',
    ingredients: ['Соевый воск', 'Эфирное масло имбиря', 'Экстракт гвоздики', 'Эфирное масло мандарина', 'Хлопковый фитиль']
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