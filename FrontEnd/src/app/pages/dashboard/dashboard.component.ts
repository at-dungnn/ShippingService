import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// PrimeNG Components
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TagModule } from 'primeng/tag';

// PrimeIcons
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';

export interface Order {
  id: string;
  customerName: string;
  status: 'pending' | 'in-transit' | 'delivered' | 'cancelled';
  time: string;
  address: string;
  amount: number;
}

export interface SummaryCard {
  title: string;
  value: number;
  icon: string;
  color: string;
  change?: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    ButtonModule,
    TableModule,
    TabMenuModule,
    BadgeModule,
    AvatarModule,
    MenuModule,
    OverlayPanelModule,
    TagModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Signals for reactive data
  summaryCards = signal<SummaryCard[]>([
    {
      title: 'Orders Today',
      value: 124,
      icon: 'pi pi-shopping-cart',
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: 'In Transit',
      value: 89,
      icon: 'pi pi-truck',
      color: 'bg-orange-500',
      change: '+5%'
    },
    {
      title: 'Delivered',
      value: 1247,
      icon: 'pi pi-check-circle',
      color: 'bg-green-500',
      change: '+18%'
    },
    {
      title: 'Cancelled',
      value: 23,
      icon: 'pi pi-times-circle',
      color: 'bg-red-500',
      change: '-3%'
    }
  ]);

  recentOrders = signal<Order[]>([
    {
      id: '#ORD-001',
      customerName: 'Nguyễn Văn An',
      status: 'in-transit',
      time: '2 hours ago',
      address: '123 Nguyễn Huệ, Q1, HCM',
      amount: 150000
    },
    {
      id: '#ORD-002',
      customerName: 'Trần Thị Bình',
      status: 'delivered',
      time: '4 hours ago',
      address: '456 Lê Lợi, Q3, HCM',
      amount: 89000
    },
    {
      id: '#ORD-003',
      customerName: 'Lê Minh Cường',
      status: 'pending',
      time: '1 hour ago',
      address: '789 Pasteur, Q1, HCM',
      amount: 320000
    },
    {
      id: '#ORD-004',
      customerName: 'Phạm Thu Hà',
      status: 'delivered',
      time: '6 hours ago',
      address: '321 Điện Biên Phủ, Q.Bình Thạnh, HCM',
      amount: 210000
    },
    {
      id: '#ORD-005',
      customerName: 'Hoàng Văn Đức',
      status: 'cancelled',
      time: '3 hours ago',
      address: '654 Cách Mạng Tháng 8, Q10, HCM',
      amount: 180000
    }
  ]);

  // Tab menu items for footer navigation
  tabMenuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/dashboard'
    },
    {
      label: 'Orders',
      icon: 'pi pi-list',
      routerLink: '/orders'
    },
    {
      label: 'Analytics',
      icon: 'pi pi-chart-bar',
      routerLink: '/analytics'
    },
    {
      label: 'Profile',
      icon: 'pi pi-user',
      routerLink: '/profile'
    }
  ];

  // Notification menu items
  notificationItems: MenuItem[] = [
    {
      label: 'New order received',
      icon: 'pi pi-bell',
      command: () => this.handleNotification('new-order')
    },
    {
      label: 'Package delivered',
      icon: 'pi pi-check',
      command: () => this.handleNotification('delivered')
    },
    {
      label: 'Payment received',
      icon: 'pi pi-dollar',
      command: () => this.handleNotification('payment')
    }
  ];

  // Get status badge severity
  getStatusSeverity(status: string): string {
    switch (status) {
      case 'pending':
        return 'warning';
      case 'in-transit':
        return 'info';
      case 'delivered':
        return 'success';
      case 'cancelled':
        return 'danger';
      default:
        return 'secondary';
    }
  }

  // Get status label
  getStatusLabel(status: string): string {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'in-transit':
        return 'In Transit';
      case 'delivered':
        return 'Delivered';
      case 'cancelled':
        return 'Cancelled';
      default:
        return 'Unknown';
    }
  }

  // Handle notification click
  handleNotification(type: string): void {
    console.log(`Notification clicked: ${type}`);
    // Implement notification handling logic
  }

  // Handle notification item click
  handleNotificationClick(item: MenuItem): void {
    if (item.command) {
      const event: MenuItemCommandEvent = {
        originalEvent: new Event('click'),
        item: item
      };
      item.command(event);
    }
  }

  // Handle quick actions
  onNewOrder(): void {
    console.log('Create new order');
    // Navigate to new order page
  }

  onTrackPackage(): void {
    console.log('Track package');
    // Navigate to tracking page
  }

  // Format currency
  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  }
}
