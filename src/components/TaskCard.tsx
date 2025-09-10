import { Task } from '@/data/tasks';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Trash2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';

interface TaskCardProps {
  task: Task;
  onStatusChange: (id: string, status: Task['status']) => void;
  onDelete: (id: string) => void;
}

const priorityStyles = {
  low: 'bg-green-100 text-green-800 border-green-200',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  high: 'bg-red-100 text-red-800 border-red-200',
};

const statusStyles = {
  todo: 'border-gray-300',
  'in-progress': 'border-blue-500',
  done: 'border-green-500',
};

const TaskCard = ({ task, onStatusChange, onDelete }: TaskCardProps) => {
  const dueDate = new Date(task.dueDate);
  const isOverdue = dueDate < new Date() && task.status !== 'done';

  return (
    <Card className={cn('transition-all hover:shadow-md border-l-4', statusStyles[task.status])}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{task.title}</CardTitle>
          <Badge variant="outline" className={cn(priorityStyles[task.priority])}>
            {task.priority}
          </Badge>
        </div>
        <CardDescription className={cn('text-sm', isOverdue ? 'text-red-500' : 'text-muted-foreground')}>
          Due {formatDistanceToNow(dueDate, { addSuffix: true })}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{task.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {task.status !== 'in-progress' && (
              <Button size="sm" variant="outline" onClick={() => onStatusChange(task.id, 'in-progress')}>
                <ArrowRight className="w-4 h-4 mr-2" /> Start
              </Button>
            )}
            {task.status !== 'done' && (
              <Button size="sm" variant="outline" onClick={() => onStatusChange(task.id, 'done')}>
                <Check className="w-4 h-4 mr-2" /> Done
              </Button>
            )}
          </div>
          <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-red-500" onClick={() => onDelete(task.id)}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;