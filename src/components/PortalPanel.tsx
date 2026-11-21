import { ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export type PanelProps = { open: boolean; onClose: () => void; onRestoreFocus?: () => void };
type Props = PanelProps & { title: string; subtitle: string; closeLabel: string; children: ReactNode };

export default function PortalPanel({ open, onClose, onRestoreFocus, title, subtitle, closeLabel, children }: Props) {
  return <DialogPrimitive.Root open={open} onOpenChange={value => { if (!value) onClose(); }}>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl" />
      <DialogPrimitive.Content className="portal-panel fixed inset-0 z-50 overflow-y-auto bg-background/95 outline-none"
        onCloseAutoFocus={event => { if (onRestoreFocus) { event.preventDefault(); onRestoreFocus(); } }}>
        <header className="sticky top-0 flex gap-4 items-center justify-between px-4 md:px-6 py-4 z-10 bg-background/95 backdrop-blur-md border-b border-border/50">
          <div className="min-w-0">
            <DialogPrimitive.Title className="text-sm font-bold uppercase tracking-widest">{title}</DialogPrimitive.Title>
            <DialogPrimitive.Description className="text-xs text-muted-foreground mt-1">{subtitle}</DialogPrimitive.Description>
          </div>
          <DialogPrimitive.Close asChild><Button variant="ghost" size="icon" className="shrink-0" aria-label={closeLabel} title={closeLabel}><X className="h-5 w-5" /></Button></DialogPrimitive.Close>
        </header>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>;
}