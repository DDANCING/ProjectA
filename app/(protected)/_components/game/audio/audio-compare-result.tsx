import { ColorRing } from 'react-loader-spinner'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import Link from 'next/link';

interface SimilarityResultDialogProps {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  similarityResult: number | null;
  similarityDetails: {
    input_total_hashes: number;
    hashes_matched_in_input: number;
  } | null;
}

const SimilarityResultDialog: React.FC<SimilarityResultDialogProps> = ({
  isOpen,
  onClose,
  loading,
  similarityResult,
  similarityDetails,
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {loading ? "Loading result..." : "Comparison Result"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {loading ? (
              <div className='flex w-full justify-center '>
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={['#6d28d9', '#192331', '#6d28d9', '#192331', '#6d28d9']}
                />
              </div>
            ) : (
              <>
                <div>
                  <h1 className='font-bold text-muted-foreground'>Percentage: {similarityResult}</h1>
                  <p>Total Hashes: {similarityDetails?.input_total_hashes}</p>
                  <p>Matching Hashes: {similarityDetails?.hashes_matched_in_input}</p>
                </div>
              </>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='w-full gap-4 flex items-center'>
          <Link href="/game/dashboard">
            <AlertDialogAction onClick={onClose} className='bg-transparent border border-muted hover:bg-muted/25 '>
              Exit
            </AlertDialogAction>
          </Link>
          <AlertDialogAction onClick={onClose} className=''>
            Close
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SimilarityResultDialog;
