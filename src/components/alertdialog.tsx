import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface alertdialogProps {
  isAlertDialogOpen: boolean;
  alertDialogTitle: string;
  alertDialogDescription: string;
  setisAlertDialogOpen: (arg: boolean) => void;
  setAnotherDialogOpen: (arg: boolean) => void;
}

export const Alertdialog: React.FC<alertdialogProps> = ({
  isAlertDialogOpen,
  setisAlertDialogOpen,
  setAnotherDialogOpen,
  alertDialogDescription,
  alertDialogTitle,
}) => {
  return (
    <AlertDialog open={isAlertDialogOpen} onOpenChange={setisAlertDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{alertDialogTitle}</AlertDialogTitle>
          <AlertDialogDescription>
           {alertDialogDescription}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setisAlertDialogOpen(false)}>
            Cancel
          </AlertDialogCancel>

          {/* Close both AlertDialog and InviteMember Dialog on Continue */}
          <AlertDialogAction
          className="bg-destructive text-destructive-foreground shadow-sm"
            onClick={() => {
              setisAlertDialogOpen(false); //close alert dialog.
              setAnotherDialogOpen(false); //close invitemember dialog.
            }}
          >
            Discard
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
