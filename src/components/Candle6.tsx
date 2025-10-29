import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Candle6 = () => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="aspect-square overflow-hidden bg-secondary/20">
        <img 
          src="https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/66ca1302-d104-4bc2-b98f-a9bbd4a9a6f1.jpg"
          alt="Цветочная гармония"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">Цветочная гармония</h3>
        <p className="text-muted-foreground mb-4 text-sm">Нежный букет жасмина и розы</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Icon name="Flame" size={16} />
          <span>50 часов горения</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">2 690 ₽</span>
          <Button>
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Candle6;
