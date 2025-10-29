import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Candle5 = () => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="aspect-square overflow-hidden bg-secondary/20">
        <img 
          src="https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/6f5539a4-783c-4708-aa11-0e546778138c.jpg"
          alt="Морской бриз"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">Морской бриз</h3>
        <p className="text-muted-foreground mb-4 text-sm">Свежий аромат океана и морской соли</p>
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

export default Candle5;