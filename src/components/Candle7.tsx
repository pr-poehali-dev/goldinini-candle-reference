import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Candle7 = () => {
  const navigate = useNavigate();
  
  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={() => navigate('/candle/7')}
    >
      <div className="aspect-square overflow-hidden bg-secondary/20">
        <img 
          src="https://cdn.poehali.dev/files/9a61e030-1d62-480c-96d9-bf7c6ba3cd8f.png"
          alt="Нежные лапки"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">Нежные лапки</h3>
        <p className="text-muted-foreground mb-4 text-sm">Аромат выбирается Вами из предложенных</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">2 490 ₽</span>
          <Button onClick={(e) => {
            e.stopPropagation();
          }}>
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Candle7;