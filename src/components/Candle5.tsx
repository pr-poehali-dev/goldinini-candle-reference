import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Candle5 = () => {
  const navigate = useNavigate();
  
  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={() => navigate('/candle/5')}
    >
      <div className="aspect-square overflow-hidden bg-secondary/20">
        <img 
          src="https://cdn.poehali.dev/files/2bd4ffb2-5835-4c40-aa2b-63d3b9fa463e.png"
          alt="Ракушка с жемчужинкой"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">Лазурный шепот</h3>
        <p className="text-muted-foreground mb-4 text-sm">Аромат выбирается Вами из предложенных.</p>
        <div className="flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">1 300 ₽</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Candle5;