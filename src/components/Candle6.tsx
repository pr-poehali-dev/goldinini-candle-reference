import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Candle6 = () => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="aspect-square overflow-hidden bg-secondary/20">
        <img 
          src="https://cdn.poehali.dev/files/aedde759-4c17-4ccc-ada4-89f4f6ec3433.png"
          alt="Цветочная гармония"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">Пудель</h3>
        <p className="text-muted-foreground mb-4 text-sm">Аромат выбирается Вами из предложенных.</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">1 000 ₽</span>
          <Button>
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Candle6;