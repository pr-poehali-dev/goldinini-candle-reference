import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Candle1 = () => {
  const navigate = useNavigate();
  
  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={() => navigate('/candle/1')}
    >
      <div className="aspect-square overflow-hidden bg-secondary/20">
        <img 
          src="https://cdn.poehali.dev/files/426ad8c3-927a-4a2d-9e5f-3e28c19462a9.png"
          alt="Прогноз погоды"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">Венера Милосская</h3>
        <p className="text-muted-foreground mb-4 text-sm">Аромат выбирается Вами из предложенных.</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">1300 ₽</span>
          <Button onClick={(e) => {
            e.stopPropagation();
            // Логика добавления в корзину
          }}>
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Candle1;