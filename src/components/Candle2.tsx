import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Candle2 = () => {
  const navigate = useNavigate();
  
  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={() => navigate('/candle/2')}
    >
      <div className="aspect-square overflow-hidden bg-secondary/20">
        <img 
          src="https://cdn.poehali.dev/files/dcdd400a-1ec8-4d96-b910-a45d684bc332.png"
          alt="Хлопковая нежность"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">Хлопковая нежность</h3>
        <p className="text-muted-foreground mb-4 text-sm">Аромат выбирается Вами из предложенных.</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">2 490 ₽</span>
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

export default Candle2;