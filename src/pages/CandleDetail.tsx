import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface CandleData {
  id: string;
  name: string;
  price: string;
  image: string;
}

const candles: Record<string, CandleData> = {
  '1': {
    id: '1',
    name: 'Венера Милосская',
    price: '400 ₽',
    image: 'https://cdn.poehali.dev/files/426ad8c3-927a-4a2d-9e5f-3e28c19462a9.png'
  },
  '2': {
    id: '2',
    name: 'Прогноз погоды',
    price: '1 300 ₽',
    image: 'https://cdn.poehali.dev/files/fd34102a-17bf-4c27-8be9-6c71fe6ef70e.png'
  },
  '3': {
    id: '3',
    name: 'Запах нового года',
    price: '700 ₽',
    image: 'https://cdn.poehali.dev/files/710ec8a2-253c-4f1f-aefd-67b8122dc860.png'
  },
  '4': {
    id: '4',
    name: 'Кофе с молоком',
    price: '1 300 ₽',
    image: 'https://cdn.poehali.dev/files/7b231460-5e7a-48a5-ae59-c43f01a15a1f.png'
  },
  '5': {
    id: '5',
    name: 'Ракушка с жемчужинкой',
    price: '2 490 ₽',
    image: 'https://cdn.poehali.dev/files/2bd4ffb2-5835-4c40-aa2b-63d3b9fa463e.png'
  },
  '6': {
    id: '6',
    name: 'Пудель',
    price: '1 000 ₽',
    image: 'https://cdn.poehali.dev/files/8a4101e0-3ac4-419a-a6bc-911dd1f6369d.png'
  },
  '7': {
    id: '7',
    name: 'Нежные лапки',
    price: '150 ₽',
    image: 'https://cdn.poehali.dev/files/9a61e030-1d62-480c-96d9-bf7c6ba3cd8f.png'
  },
  '8': {
    id: '8',
    name: 'Пряный апельсин',
    price: '2 590 ₽',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/e17a7599-e115-4a40-b5de-03853d3edba5.jpg'
  },
  '9': {
    id: '9',
    name: 'Морской бриз',
    price: '2 790 ₽',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/e17a7599-e115-4a40-b5de-03853d3edba5.jpg'
  },
  '10': {
    id: '10',
    name: 'Шоколадный соблазн',
    price: '2 890 ₽',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/e17a7599-e115-4a40-b5de-03853d3edba5.jpg'
  },
  '11': {
    id: '11',
    name: 'Сладкая карамель',
    price: '2 690 ₽',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/e17a7599-e115-4a40-b5de-03853d3edba5.jpg'
  },
  '12': {
    id: '12',
    name: 'Зимняя сказка',
    price: '2 990 ₽',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/e17a7599-e115-4a40-b5de-03853d3edba5.jpg'
  }
};

const CandleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const candle = id ? candles[id] : null;
  
  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState(candle?.name || '');
  
  const [isEditingPrice, setIsEditingPrice] = useState(false);
  const [editedPrice, setEditedPrice] = useState(candle?.price || '');

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
              {isEditingName ? (
                <div className="space-y-2 mb-4">
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="w-full text-4xl font-serif font-bold p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      onClick={() => setIsEditingName(false)}
                    >
                      Сохранить
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => {
                        setEditedName(candle.name);
                        setIsEditingName(false);
                      }}
                    >
                      Отмена
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="mb-4 flex items-center gap-2">
                  <h1 className="text-4xl font-serif font-bold">{editedName}</h1>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    onClick={() => setIsEditingName(true)}
                    className="text-primary hover:text-primary/80"
                  >
                    <Icon name="Edit" size={16} />
                  </Button>
                </div>
              )}
            </div>

            <div className="p-6 bg-secondary/20 rounded-lg">
              {isEditingPrice ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={editedPrice}
                    onChange={(e) => setEditedPrice(e.target.value)}
                    className="w-full text-4xl font-bold text-primary p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      onClick={() => setIsEditingPrice(false)}
                    >
                      Сохранить
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => {
                        setEditedPrice(candle.price);
                        setIsEditingPrice(false);
                      }}
                    >
                      Отмена
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold text-primary">{editedPrice}</span>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    onClick={() => setIsEditingPrice(true)}
                    className="text-primary hover:text-primary/80"
                  >
                    <Icon name="Edit" size={16} />
                  </Button>
                </div>
              )}
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="font-serif font-semibold text-lg mb-3">О продукте</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>100% натуральный соевый и кокосовый воск</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Ручная работа с вниманием к деталям</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Аромат выбирается Вами из предложенных</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Долгое и равномерное горение</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20">
              <h3 className="font-serif font-semibold text-lg mb-2 flex items-center gap-2">
                <Icon name="Info" size={20} className="text-primary" />
                Как заказать
              </h3>
              <p className="text-muted-foreground text-sm">
                Для оформления заказа свяжитесь с нами через раздел "Контакты" или напишите в Telegram. 
                Мы поможем выбрать идеальный аромат для вашей свечи!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandleDetail;
