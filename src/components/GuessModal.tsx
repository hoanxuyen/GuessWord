import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { ElementTestIds } from "../GuessUtil";
export default function GuessModal({
  children,
  isModalOpen,
}: {
  children: React.ReactNode;
  isModalOpen: boolean;
}) {
  return (
    <AnimatePresence>
      {isModalOpen && (
        // Wrapper
        <motion.div
          className="fixed inset-0 flex justify-center z-50 bg-black bg-opacity-30"
          data-testid={ElementTestIds.modal}
        >
          <motion.div
            className="bg-white rounded-lg p-2 sm:p-6 sm:max-w-sm sm:w-fit h-fit shadow-lg"
            initial={{ y: "-100%" }}
            animate={{ y: 150 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
