import { Audio } from 'react-loader-spinner'
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
  similarityResult: string | null;
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
            {loading ? "Carregando resultado..." : "Resultado da Comparação"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {loading ? (
              <div>
              <Audio
                 height="80"
                 width="80"
                 color="0x6d28d9"
                 ariaLabel="loading"
              />
               
                </div>
            ) : (
              <>
                <p>{similarityResult}</p>
                <p>Total de Hashes: {similarityDetails?.input_total_hashes}</p>
                <p>Hashes Correspondentes: {similarityDetails?.hashes_matched_in_input}</p>
              </>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
        <Link href="/game/dashboard">
          <AlertDialogAction onClick={onClose} className='bg-transparent border border-muted w-20 hover:bg-muted/25'>
            Sair
          </AlertDialogAction>
          </Link>
          <AlertDialogAction onClick={onClose} className=''>
            Fechar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SimilarityResultDialog;
