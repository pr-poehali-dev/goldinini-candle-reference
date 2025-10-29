import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Candle3 = () => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="aspect-square overflow-hidden bg-secondary/20">
        <img 
          src="https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/75938731-724b-4352-bd6a-d6b0604d9bb0.jpg"
          alt="Цитрусовая свежесть"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">Цитрусовая свежесть</h3>
        <p className="text-muted-foreground mb-4 text-sm">Бодрящий аромат апельсина и лимона</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Icon name="Flame" size={16} />
          <span>45 часов горения</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">2 490 ₽</span>
          <Button>
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Candle3;
