import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
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
    description: 'Аромат выбирается Вами из предложенных',
    price: '1 300 ₽',
    image: 'https://cdn.poehali.dev/files/426ad8c3-927a-4a2d-9e5f-3e28c19462a9.png',
    fullDescription: 'Нежная голубая свеча с рельефной текстурой и хлопковыми цветками. Создаёт атмосферу спокойствия и уюта.',
    ingredients: ['Соевый воск', 'Аромат на выбор', 'Натуральный декор', 'Хлопковый фитиль']
  },
  '2': {
    id: '2',
    name: 'Прогноз погоды',
    description: 'Аромат выбирается Вами из предложенных',
    price: '1 300 ₽',
    image: 'https://cdn.poehali.dev/files/fd34102a-17bf-4c27-8be9-6c71fe6ef70e.png',
    fullDescription: 'Нежная голубая свеча с рельефной текстурой и хлопковыми цветками. Создаёт атмосферу спокойствия и уюта.',
    ingredients: ['Соевый воск', 'Аромат на выбор', 'Натуральный декор', 'Хлопковый фитиль']
  },
  '3': {
    id: '3',
    name: 'Запах нового года',
    description: 'Аромат выбирается Вами из предложенных',
    price: '700 ₽',
    image: 'https://cdn.poehali.dev/files/710ec8a2-253c-4f1f-aefd-67b8122dc860.png',
    fullDescription: 'Праздничная свеча в скорлупе кокоса с зимним декором — красные ягоды, еловые веточки и золотой бантик создают новогоднее настроение.',
    ingredients: ['Соевый воск', 'Аромат на выбор', 'Натуральный декор', 'Деревянный фитиль']
  },
  '4': {
    id: '4',
    name: 'Кофе с молоком',
    description: 'Аромат выбирается Вами из предложенных',
    price: '1 300 ₽',
    image: 'https://cdn.poehali.dev/files/7b231460-5e7a-48a5-ae59-c43f01a15a1f.png',
    fullDescription: 'Элегантная двухцветная свеча кофейно-молочных оттенков. Создаёт уютную атмосферу домашнего тепла.',
    ingredients: ['Соевый воск', 'Аромат на выбор', 'Натуральный декор', 'Хлопковый фитиль']
  },
  '5': {
    id: '5',
    name: 'Ракушка с жемчужинкой',
    description: 'Аромат выбирается Вами из предложенных',
    price: '2 490 ₽',
    image: 'https://cdn.poehali.dev/files/2bd4ffb2-5835-4c40-aa2b-63d3b9fa463e.png',
    fullDescription: 'Изысканная декоративная свеча. Создаёт морскую атмосферу и дарит ощущение свежести.',
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
    price: '150 ₽',
    image: 'https://cdn.poehali.dev/files/9a61e030-1d62-480c-96d9-bf7c6ba3cd8f.png',
    fullDescription: 'Милые фигурные свечи в форме лапок. Идеальный подарок для любителей домашних питомцев и уютной атмосферы.',
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
  
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [editedDescription, setEditedDescription] = useState(candle?.fullDescription || '');
  
  const [isEditingIngredients, setIsEditingIngredients] = useState(false);
  const [editedIngredients, setEditedIngredients] = useState<string[]>(candle?.ingredients || []);
  const [newIngredient, setNewIngredient] = useState('');

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
              
              {isEditingDescription ? (
                <div className="space-y-2">
                  <textarea
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    className="w-full min-h-[100px] p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      onClick={() => {
                        setIsEditingDescription(false);
                      }}
                    >
                      Сохранить
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => {
                        setEditedDescription(candle.fullDescription);
                        setIsEditingDescription(false);
                      }}
                    >
                      Отмена
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="relative group">
                  <p className="text-foreground/80 leading-relaxed">{editedDescription}</p>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => setIsEditingDescription(true)}
                  >
                    <Icon name="Pencil" size={16} className="mr-1" />
                    Редактировать
                  </Button>
                </div>
              )}
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Icon name="Leaf" size={20} className="text-primary" />
                    Состав
                  </h3>
                  {!isEditingIngredients && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => setIsEditingIngredients(true)}
                    >
                      <Icon name="Pencil" size={16} className="mr-1" />
                      Редактировать
                    </Button>
                  )}
                </div>
                
                {isEditingIngredients ? (
                  <div className="space-y-3">
                    <ul className="space-y-2">
                      {editedIngredients.map((ingredient, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <input
                            type="text"
                            value={ingredient}
                            onChange={(e) => {
                              const updated = [...editedIngredients];
                              updated[index] = e.target.value;
                              setEditedIngredients(updated);
                            }}
                            className="flex-1 px-3 py-1.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => {
                              const updated = editedIngredients.filter((_, i) => i !== index);
                              setEditedIngredients(updated);
                            }}
                          >
                            <Icon name="X" size={16} />
                          </Button>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newIngredient}
                        onChange={(e) => setNewIngredient(e.target.value)}
                        placeholder="Добавить ингредиент..."
                        className="flex-1 px-3 py-1.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter' && newIngredient.trim()) {
                            setEditedIngredients([...editedIngredients, newIngredient.trim()]);
                            setNewIngredient('');
                          }
                        }}
                      />
                      <Button
                        size="sm"
                        onClick={() => {
                          if (newIngredient.trim()) {
                            setEditedIngredients([...editedIngredients, newIngredient.trim()]);
                            setNewIngredient('');
                          }
                        }}
                      >
                        <Icon name="Plus" size={16} />
                      </Button>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        onClick={() => {
                          setIsEditingIngredients(false);
                        }}
                      >
                        Сохранить
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => {
                          setEditedIngredients(candle.ingredients);
                          setNewIngredient('');
                          setIsEditingIngredients(false);
                        }}
                      >
                        Отмена
                      </Button>
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {editedIngredients.map((ingredient, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                )}
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