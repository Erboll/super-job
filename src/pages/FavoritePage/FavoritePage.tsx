import VacancyCard from "../../components/VacancyCard/VacancyCard";
import { useAppSelector } from "../../hooks/redux";
import EmptyPage from "../EmptyPage/EmptyPage";

const FavoritePage = () => {
  const { favorites } = useAppSelector((state) => state.superJob);

  if (favorites.length === 0) return <EmptyPage />;

  return (
    <>
      <VacancyCard vacancy={favorites} />
    </>
  );
};

export default FavoritePage;
