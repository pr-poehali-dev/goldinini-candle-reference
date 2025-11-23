import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Candle2 = () => {
  const navigate = useNavigate();
  
  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={() => navigate('/candle/2')}
    >
      <div className="aspect-square overflow-hidden bg-secondary/20">
        <img 
          src="https://cdn.poehali.dev/files/1816d47f-20ac-406b-8e59-e52c4ee2c1df.png"
          alt="Куб"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">Куб</h3>
        <p className="text-muted-foreground mb-4 text-sm">Аромат выбирается Вами из предложенных.</p>
        <div className="flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">600 ₽</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Candle2;