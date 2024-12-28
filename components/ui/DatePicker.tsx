'use client';

import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Popover, PopoverTrigger, PopoverContent } from './Popover';
import { Button } from './Button';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from './Calendar';

interface DatePickerProps {
  value?: Date;
  onChange?: (_date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  id?: string;
}

export function DatePicker({
  value,
  onChange,
  placeholder = 'Pick a date',
  className,
  id,
}: DatePickerProps) {
  return (
    <Popover modal={true}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !value && 'text-muted-foreground',
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, 'PPP') : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
