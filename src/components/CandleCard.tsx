import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface CandleCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  time: string;
}

const CandleCard = ({ name, description, price, image, time }: CandleCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="aspect-square overflow-hidden bg-secondary/20">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Icon name="Flame" size={16} />
          <span>{time}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{price} ₽</span>
          <Button>
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CandleCard;
