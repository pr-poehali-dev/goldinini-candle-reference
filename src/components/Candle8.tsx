import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Candle8 = () => {
  const navigate = useNavigate();
  
  return (
    <Card 
      className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={() => navigate('/candle/8')}
    >
      <div className="aspect-square overflow-hidden bg-secondary/20">
        <img 
          src="https://cdn.poehali.dev/files/628629b0-b081-4aee-9122-ddeaeb26b912.png"
          alt="Пряный апельсин"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2">Малиновый бум</h3>
        <p className="text-muted-foreground mb-4 text-sm">Аромат выбирается Вами из предложенных</p>
        <div className="flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">1 300 ₽</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Candle8;