import ImageComp from "@/components/ImageComp";
import Modal from "@/components/Modal";

interface PhotoModalPageProps {
  params: Promise<{ id: string }>;
}

const PhotoModal = async ({ params }: PhotoModalPageProps) => {
  const { id } = await params; // fileId

  return (
    <Modal>
      <ImageComp id={id} />
    </Modal>
  );
};

export default PhotoModal;
