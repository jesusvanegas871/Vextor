import {
  LayoutDashboard,
  Truck,
  Users,
  Map,
  Wrench,
  Bell,
  Settings,
  LogOut,
  Search,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Clock
} from 'lucide-react';
import { Logo } from '../../components/ui/Logo';
import { cn } from '../../utils/cn';

const Dashboard = () => {
  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Panel Principal', active: true },
    { icon: Truck, label: 'Vehículos', active: false },
    { icon: Users, label: 'Conductores', active: false },
    { icon: Map, label: 'Rutas', active: false },
    { icon: Wrench, label: 'Mantenimiento', active: false },
  ];

  const stats = [
    { label: 'Vehículos Activos', value: '42', change: '+12%', trendingUp: true },
    { label: 'Rutas Hoy', value: '156', change: '+5%', trendingUp: true },
    { label: 'Mantenimientos', value: '4', change: '-2', trendingUp: false },
    { label: 'Conductores', value: '38', change: '0%', trendingUp: true },
  ];

  return (
    <div className="flex h-screen bg-v-dark text-v-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-v-dark-soft flex flex-col">
        <div className="p-6">
          <Logo className="scale-90 origin-left" />
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-v-gray hover:bg-white/5 hover:text-v-white"
              )}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-v-gray hover:bg-white/5 hover:text-v-white transition-colors">
            <Bell size={20} />
            Notificaciones
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-v-gray hover:bg-white/5 hover:text-v-white transition-colors">
            <Settings size={20} />
            Configuración
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-400 hover:bg-red-400/10 transition-colors mt-4">
            <LogOut size={20} />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="h-16 border-b border-white/5 bg-v-dark-soft/50 backdrop-blur-md px-8 flex items-center justify-between">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-v-gray" size={18} />
            <input
              type="text"
              placeholder="Buscar vehículos, conductores..."
              className="w-full bg-v-dark border border-white/5 rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <div className="text-right">
                <p className="text-sm font-medium text-v-white">Admin Vextor</p>
                <p className="text-xs text-v-gray">Super Administrador</p>
              </div>
              <div className="h-9 w-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold">
                AV
              </div>
              <ChevronDown size={16} className="text-v-gray" />
            </div>
          </div>
        </header>

        {/* Dashboard View */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-v-white">Panel Principal</h1>
            <p className="text-v-gray">Bienvenido de nuevo a la gestión inteligente de tu flota.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 rounded-2xl bg-v-dark-soft border border-white/5 space-y-3">
                <p className="text-sm font-medium text-v-gray">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-3xl font-bold text-v-white">{stat.value}</h3>
                  <div className={cn(
                    "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full",
                    stat.trendingUp ? "text-primary bg-primary/10" : "text-red-400 bg-red-400/10"
                  )}>
                    {stat.trendingUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {stat.change}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Activity Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-6 rounded-2xl bg-v-dark-soft border border-white/5 space-y-4">
              <h3 className="text-lg font-bold text-v-white">Actividad Reciente</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-v-dark hover:bg-white/5 transition-colors group">
                    <div className="h-10 w-10 rounded-lg bg-v-gray-dark border border-white/5 flex items-center justify-center text-v-gray group-hover:text-primary group-hover:border-primary/30 transition-colors">
                      <Clock size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-v-white">Mantenimiento completado - Vehículo V-10{i}</p>
                      <p className="text-xs text-v-gray">Hace {i * 2} horas • Juan Pérez</p>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-primary/40" />
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-v-dark-soft border border-white/5 space-y-4">
              <h3 className="text-lg font-bold text-v-white">Alertas de Hoy</h3>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-1">SOAT por vencer</p>
                  <p className="text-sm text-v-white">El vehículo XYZ-789 tiene su SOAT próximo a vencer (2 días).</p>
                </div>
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Retraso en Ruta</p>
                  <p className="text-sm text-v-white">Ruta Escolar Norte presenta un retraso de 15 min.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
