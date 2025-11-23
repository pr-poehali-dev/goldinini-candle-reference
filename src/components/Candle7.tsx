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
          src="https://cdn.poehali.dev/files/cdfdf1dc-3138-4bd7-bec9-83378e91849f.png"
          alt="Нежные лапки"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">Аромасаше "Нежные лапки"</h3>
        <p className="text-muted-foreground mb-4 text-sm">Аромат выбирается Вами из предложенных</p>
        <div className="flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">150 ₽</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Candle7;