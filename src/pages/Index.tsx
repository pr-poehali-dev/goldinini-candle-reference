import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const candles = [
  {
    id: 1,
    name: 'Лавандовый сон',
    description: 'Успокаивающий аромат лаванды',
    price: '2 490',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/9420e5a4-5c9e-4b2e-94e6-98c001b701f2.jpg',
    time: '45 часов'
  },
  {
    id: 2,
    name: 'Ванильный уют',
    description: 'Тёплый сладкий аромат ванили',
    price: '2 490',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/ad7d0e93-690f-4655-bf2a-eadbf72ca009.jpg',
    time: '45 часов'
  },
  {
    id: 3,
    name: 'Цитрусовая свежесть',
    description: 'Бодрящий аромат цитрусовых',
    price: '2 490',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/e7301f50-0f5f-4a7b-be3b-e29f2d3e1148.jpg',
    time: '45 часов'
  },
  {
    id: 4,
    name: 'Древесные ноты',
    description: 'Благородный аромат сандала и кедра',
    price: '2 690',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/9420e5a4-5c9e-4b2e-94e6-98c001b701f2.jpg',
    time: '50 часов'
  },
  {
    id: 5,
    name: 'Морской бриз',
    description: 'Свежий аромат океана',
    price: '2 490',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/ad7d0e93-690f-4655-bf2a-eadbf72ca009.jpg',
    time: '45 часов'
  },
  {
    id: 6,
    name: 'Цветочная гармония',
    description: 'Нежный букет жасмина и розы',
    price: '2 690',
    image: 'https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/e7301f50-0f5f-4a7b-be3b-e29f2d3e1148.jpg',
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
              <p className="text-lg text-muted-foreground mb-8">
                Премиальные ароматические свечи ручной работы из натурального соевого воска
              </p>
              <Button size="lg" onClick={() => scrollToSection('catalog')} className="text-lg px-8">
                Смотреть каталог
              </Button>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/5d7a0bf3-3934-498a-9802-3923fa05a99f.jpg" 
                alt="Goldinini candles" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-4">Коллекция свечей</h2>
          <p className="text-center text-muted-foreground mb-12">Найдите свой идеальный аромат</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candles.map((candle) => (
              <Card key={candle.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={candle.image} 
                    alt={candle.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2">{candle.name}</h3>
                  <p className="text-muted-foreground mb-4">{candle.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Icon name="Clock" size={16} />
                    <span>{candle.time} горения</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{candle.price} ₽</span>
                    <Button>Заказать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/e7301f50-0f5f-4a7b-be3b-e29f2d3e1148.jpg" 
                alt="Производство свечей" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">О бренде Goldinini</h2>
              <p className="text-muted-foreground mb-4">
                Мы создаём свечи с душой, вручную подбирая каждый компонент. Используем только натуральный соевый воск, безопасные красители и премиальные ароматические масла.
              </p>
              <p className="text-muted-foreground mb-4">
                Каждая свеча проходит строгий контроль качества и тестирование. Мы гордимся тем, что наши свечи горят долго, ровно и наполняют пространство изысканным ароматом.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Натуральный воск</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">45+</div>
                  <div className="text-sm text-muted-foreground">Часов горения</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Ароматов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Доставка и оплата</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Truck" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Доставка по России</h3>
                    <p className="text-muted-foreground">
                      Отправляем заказы почтой России и транспортными компаниями. Срок доставки 3-7 дней.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Самовывоз</h3>
                    <p className="text-muted-foreground">
                      Забрать заказ можно из нашего шоурума в Москве. Адрес: ул. Примерная, д. 1.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="CreditCard" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Онлайн оплата</h3>
                    <p className="text-muted-foreground">
                      Принимаем к оплате все банковские карты, Apple Pay и Google Pay.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Gift" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Подарочная упаковка</h3>
                    <p className="text-muted-foreground">
                      Бесплатно упакуем ваш заказ в красивую коробку с лентой и открыткой.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Контакты</h2>
          <p className="text-muted-foreground mb-12">Свяжитесь с нами удобным способом</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">hello@goldinini.ru</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Instagram" size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Instagram</h3>
              <p className="text-muted-foreground">@goldinini</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">Goldinini</h2>
          <p className="text-sm text-muted-foreground">© 2024 Goldinini. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;