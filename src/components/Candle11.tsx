import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Candle11 = () => {
  const navigate = useNavigate();
  
  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={() => navigate('/candle/11')}
    >
      <div className="aspect-square overflow-hidden bg-secondary/20">
        <img 
          src="https://cdn.poehali.dev/projects/16b05c1d-663d-4820-9c61-a04f755b87d2/files/e17a7599-e115-4a40-b5de-03853d3edba5.jpg"
          alt="Сладкая карамель"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">Сладкая карамель</h3>
        <p className="text-muted-foreground mb-4 text-sm">Аромат выбирается Вами из предложенных</p>
        <div className="flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">2 690 ₽</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Candle11;