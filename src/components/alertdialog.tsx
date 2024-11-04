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
...props
}) => {
  return (
    <AlertDialog open={props?.isAlertDialogOpen} onOpenChange={props?.setisAlertDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{props?.alertDialogTitle}</AlertDialogTitle>
          <AlertDialogDescription>
           {props?.alertDialogDescription}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => props?.setisAlertDialogOpen(false)}>
            Cancel
          </AlertDialogCancel>

          {/* Close both AlertDialog and InviteMember Dialog on Continue */}
          <AlertDialogAction
            onClick={() => {
             props?.setisAlertDialogOpen(false); //close alert dialog.
              props?.setAnotherDialogOpen(false); //close invitemember dialog.
            }}
          >
            Discard
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
