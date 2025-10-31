import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Notification {
  id: number;
  name: string;
  amount: number;
  time: string;
}

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [onlineCount, setOnlineCount] = useState(1247);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const names = ['Михаил', 'Александр', 'Дмитрий', 'Владимир', 'Сергей', 'Иван', 'Артём', 'Максим'];
  const amounts = [20, 30, 40, 50];

  useEffect(() => {
    const onlineInterval = setInterval(() => {
      setOnlineCount(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 3000);

    const notificationInterval = setInterval(() => {
      const newNotification: Notification = {
        id: Date.now(),
        name: names[Math.floor(Math.random() * names.length)],
        amount: amounts[Math.floor(Math.random() * amounts.length)],
        time: '15 минут назад'
      };

      setNotifications(prev => [newNotification, ...prev].slice(0, 3));
    }, 8000);

    return () => {
      clearInterval(onlineInterval);
      clearInterval(notificationInterval);
    };
  }, []);

  const features = [
    { icon: 'Target', title: 'Аимбот', description: 'Идеальная точность в каждом выстреле' },
    { icon: 'Eye', title: 'Валлхак', description: 'Видимость врагов сквозь стены' },
    { icon: 'Zap', title: 'Триггербот', description: 'Мгновенная реакция при наведении' },
    { icon: 'Shield', title: 'Защита', description: 'Обход античита и VAC' },
    { icon: 'Gamepad2', title: 'ESP', description: 'Полная информация о противниках' },
    { icon: 'Crown', title: 'Премиум', description: 'Эксклюзивные функции для профи' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0F] via-[#111116] to-[#0A0A0F] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjE1LDAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="text-center mb-12 pt-8">
          <div className="inline-block mb-4">
            <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black text-sm px-4 py-2 animate-pulse">
              <Icon name="Star" size={16} className="mr-2" />
              САМЫЙ ЛУЧШИЙ ЧИТ 2025
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent tracking-tight">
            Magic Cheats
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-500/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-muted-foreground text-sm">Онлайн:</span>
              <span className="text-yellow-500 font-bold text-lg">{onlineCount}</span>
            </div>
          </div>

          <Button 
            onClick={() => setIsDialogOpen(true)}
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold text-lg px-12 py-6 rounded-full shadow-2xl shadow-yellow-500/50 transform hover:scale-105 transition-all"
          >
            <Icon name="ShoppingCart" size={24} className="mr-2" />
            КУПИТЬ ЧИТ
          </Button>
        </header>

        <div className="fixed bottom-8 right-8 space-y-3 z-50 max-w-sm">
          {notifications.map((notif) => (
            <Card 
              key={notif.id}
              className="bg-card/90 backdrop-blur-lg border-yellow-500/30 p-4 animate-slide-in-right shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Icon name="User" size={20} className="text-yellow-500" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{notif.name}</p>
                  <p className="text-xs text-muted-foreground">купил чит за {notif.amount}$</p>
                </div>
                <span className="text-xs text-yellow-500">{notif.time}</span>
              </div>
            </Card>
          ))}
        </div>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Функции <span className="text-yellow-500">Премиум</span> Чита
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-yellow-500/20 p-6 hover:border-yellow-500/50 transition-all hover:shadow-xl hover:shadow-yellow-500/10 hover:scale-105 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-all">
                    <Icon name={feature.icon} size={24} className="text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={() => setIsDialogOpen(true)}
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-8"
            >
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Купить сейчас
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-yellow-500/50 hover:bg-yellow-500/10 font-bold px-8"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Задать вопрос
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-yellow-500/50 hover:bg-yellow-500/10 font-bold px-8"
            >
              <Icon name="Download" size={20} className="mr-2" />
              Скачать
            </Button>
          </div>
        </section>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-card border-yellow-500/30 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Контакты для покупки
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-6">
            <div className="bg-muted/50 p-6 rounded-lg border border-yellow-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Свяжитесь с нами</p>
                  <p className="font-bold text-xl">Богдан</p>
                </div>
              </div>
              <div className="bg-background/50 p-4 rounded-lg text-center">
                <p className="text-2xl font-mono font-bold text-yellow-500 tracking-wider">
                  +7 906 374-36-81
                </p>
              </div>
            </div>
            
            <div className="text-center text-sm text-muted-foreground">
              <p>Доступные способы связи:</p>
              <div className="flex justify-center gap-4 mt-2">
                <Badge variant="outline" className="border-yellow-500/30">WhatsApp</Badge>
                <Badge variant="outline" className="border-yellow-500/30">Telegram</Badge>
                <Badge variant="outline" className="border-yellow-500/30">Звонок</Badge>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
