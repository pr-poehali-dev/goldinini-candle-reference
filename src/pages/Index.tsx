import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const candles = [
  {
    id: 1,
    name: 'Лавандовый сон',
    description: 'Успокаивающий аромат лаванды для крепкого сна',
    price: '2 490',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/66ca1302-d104-4bc2-b98f-a9bbd4a9a6f1.jpg',
    time: '45 часов'
  },
  {
    id: 2,
    name: 'Ванильный уют',
    description: 'Тёплый сладкий аромат для домашнего комфорта',
    price: '2 490',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/a5b93351-195d-49ee-ac65-3e63fcab40a6.jpg',
    time: '45 часов'
  },
  {
    id: 3,
    name: 'Цитрусовая свежесть',
    description: 'Бодрящий аромат апельсина и лимона',
    price: '2 490',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/75938731-724b-4352-bd6a-d6b0604d9bb0.jpg',
    time: '45 часов'
  },
  {
    id: 4,
    name: 'Древесные ноты',
    description: 'Благородный аромат сандала и кедра',
    price: '2 690',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/dff2e544-bf90-4086-a9ed-75d11a798add.jpg',
    time: '50 часов'
  },
  {
    id: 5,
    name: 'Морской бриз',
    description: 'Свежий аромат океана и морской соли',
    price: '2 490',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/6f5539a4-783c-4708-aa11-0e546778138c.jpg',
    time: '45 часов'
  },
  {
    id: 6,
    name: 'Цветочная гармония',
    description: 'Нежный букет жасмина и розы',
    price: '2 690',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/66ca1302-d104-4bc2-b98f-a9bbd4a9a6f1.jpg',
    time: '50 часов'
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-bold text-primary">Goldinini</h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('catalog')} className="text-foreground hover:text-primary transition-colors">Каталог</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">О бренде</button>
              <button onClick={() => scrollToSection('delivery')} className="text-foreground hover:text-primary transition-colors">Доставка</button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
                Создаём атмосферу тепла и уюта
              </h2>
              <p className="text-lg text-muted-foreground mb-8">Премиальные ароматические свечи ручной работы из натурального соевого и кокосового воска.
Каждая свеча - это уникальное сочетание изысканных ароматов и безупречного качества.</p>
              <Button size="lg" onClick={() => scrollToSection('catalog')} className="text-lg px-8">
                Смотреть каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/6f5539a4-783c-4708-aa11-0e546778138c.jpg" 
                alt="Goldinini candles" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Icon name="Leaf" size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg mb-2">100% натурально</h3>
                <p className="text-muted-foreground text-sm">Только соевый воск и эфирные масла премиум-класса</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Icon name="Heart" size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg mb-2">Ручная работа</h3>
                <p className="text-muted-foreground text-sm">Каждая свеча создаётся с любовью и вниманием к деталям</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Icon name="Clock" size={28} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg mb-2">До 15 часов</h3>
                <p className="text-muted-foreground text-sm">Долгое и равномерное горение без копоти</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-4">Коллекция свечей</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Найдите свой идеальный аромат среди нашей тщательно подобранной коллекции
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candles.map((candle) => (
              <Card key={candle.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-square overflow-hidden bg-secondary/20">
                  <img 
                    src={candle.image} 
                    alt={candle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2">{candle.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{candle.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Icon name="Flame" size={16} />
                    <span>{candle.time} горения</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{candle.price} ₽</span>
                    <Button>
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/05f573ab-79d0-468a-8edd-cf2397631ef2.jpg" 
                alt="Производство свечей" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-serif font-bold mb-6">О бренде Goldinini</h2>
              <p className="text-muted-foreground mb-4">
                Мы создаём свечи с душой, вручную подбирая каждый компонент. Используем только натуральный соевый воск, безопасные красители и премиальные ароматические масла высочайшего качества.
              </p>
              <p className="text-muted-foreground mb-6">
                Каждая свеча проходит строгий контроль качества и тестирование. Мы гордимся тем, что наши свечи горят долго, ровно и наполняют пространство изысканным ароматом, создавая атмосферу тепла и уюта в вашем доме.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Натуральный воск</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">45+</div>
                  <div className="text-sm text-muted-foreground">Часов горения</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Уникальных ароматов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Доставка и оплата</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Truck" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Доставка по России</h3>
                    <p className="text-muted-foreground mb-3">
                      Бесплатная доставка при заказе от 5000 ₽
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Москва и МО — 1-2 дня</li>
                      <li>• Регионы России — 3-7 дней</li>
                      <li>• СДЭК, Boxberry, Почта России</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="CreditCard" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Способы оплаты</h3>
                    <p className="text-muted-foreground mb-3">
                      Выберите удобный для вас способ
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Банковские карты</li>
                      <li>• СБП (Система быстрых платежей)</li>
                      <li>• Наличными при получении</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Остались вопросы?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы с радостью поможем с выбором и ответим на все вопросы.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Card className="inline-block">
              <CardContent className="p-6 flex items-center gap-3">
                <Icon name="Phone" size={20} className="text-primary" />
                <span className="font-medium">+7 (495) 123-45-67</span>
              </CardContent>
            </Card>
            
            <Card className="inline-block">
              <CardContent className="p-6 flex items-center gap-3">
                <Icon name="Mail" size={20} className="text-primary" />
                <span className="font-medium">hello@goldinini.ru</span>
              </CardContent>
            </Card>
            
            <Card className="inline-block">
              <CardContent className="p-6 flex items-center gap-3">
                <Icon name="Instagram" size={20} className="text-primary" />
                <span className="font-medium">@goldinini_candles</span>
              </CardContent>
            </Card>
          </div>
          
          <Button size="lg" className="text-lg px-8">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Написать в WhatsApp
          </Button>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Goldinini</h3>
              <p className="text-sm opacity-80">Премиальные ароматические свечи ручной работы</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Новинки</li>
                <li>Бестселлеры</li>
                <li>Подарочные наборы</li>
                <li>Все ароматы</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О бренде</li>
                <li>Доставка и оплата</li>
                <li>Возврат и обмен</li>
                <li>Контакты</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" size={24} className="opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                <Icon name="Facebook" size={24} className="opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
                <Icon name="Youtube" size={24} className="opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-60">
            <p>© 2025 Goldinini. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;