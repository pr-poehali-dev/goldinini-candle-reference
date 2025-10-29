import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Candle4 = () => {
  const navigate = useNavigate();
  
  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={() => navigate('/candle/4')}
    >
      <div className="aspect-square overflow-hidden bg-secondary/20">
        <img 
          src="https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/dff2e544-bf90-4086-a9ed-75d11a798add.jpg"
          alt="Древесные ноты"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">Древесные ноты</h3>
        <p className="text-muted-foreground mb-4 text-sm">Благородный аромат сандала и кедра</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">2 690 ₽</span>
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

export default Candle4;