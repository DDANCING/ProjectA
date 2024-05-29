"use client"

import { Chapter } from "@prisma/client";
import { useEffect, useState } from "react";
import { 
  DragDropContext,
   Droppable,
    Draggable,
     DropResult 
    } from "@hello-pangea/dnd";
import { cn } from "@/lib/utils";
import {  Grip, GripVertical, PencilLine } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ChaptersListProps {
  items: Chapter[];
  onReorder:  (updateData: { id: string; position: number}[]) => void;
  onEdit: (id: string) => void;
}

export const ChaptersList = ({ items, onReorder, onEdit }: ChaptersListProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [chapter, setChapters] = useState(items);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() =>{
    setChapters(items);
  }, [items]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(chapter);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const startIndex = Math.min(result.source.index, result.destination.index);
    const endIndex = Math.max(result.source.index, result.destination.index);

    const updatedChapters = items.slice(startIndex, endIndex + 1);

    setChapters(items);

    const bulkUpdateData = updatedChapters.map((chapter) => ({
      id: chapter.id,
      position: items.findIndex((item) => item.id === chapter.id)
    }));
    
    onReorder(bulkUpdateData);

  }

  if (!isMounted) {
    return null
  }

  return (
    <DragDropContext 
    onDragEnd={onDragEnd}>
      <Droppable droppableId="chapters">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
              {chapter.map((chapter, index) => (
                <Draggable 
                key={chapter.id} 
                draggableId={chapter.id} 
                index={index}
                >
                  {(provided) => (
                    <div className={cn(
                      "flex items-center gap-x-2 bg-primary/20 border-muted-foreground border text-foreground rounded-md mb-4 text-sm",
                      chapter.isPublished && "bg-primary/20 border-primary/40 text-primary"
                    )}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    >
                     <div className={cn(
                      "px-2 py-3 border-r border-r-slate-200 hover:bg-muted-foreground rounded-l-md transition",
                      chapter.isPublished && "border-r-primary/20  hover: bg-primary/20"
                     )}
                     {...provided.dragHandleProps}
                     >
                       <Grip/>
                     </div>
                     {chapter.title}
                     <div className="ml-auto pr-2 flex items-center gap-x-2">
                       {chapter.isFree && (
                        <Badge>
                          Free
                        </Badge>
                       )}
                       <Badge
                         className={cn(
                          "bg-muted",
                          chapter.isPublished && "bg-primary"
                         )}
                       >
                        {chapter.isPublished ? "Published" : "Draft" }
                       </Badge>
                       <PencilLine
                       onClick={() => onEdit(chapter.id)}
                       className="w-4 h-4 cursor-pointer hover:opacity-75 transition"
                       />
                     </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
          </div>
        )}

      </Droppable>

    </DragDropContext>
    );
}
 
