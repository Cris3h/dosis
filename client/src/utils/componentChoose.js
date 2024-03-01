import Amoxicillin from "@/components/componentsGroup/Amoxicillin";
import AmoxiAcClav from "@/components/componentsGroup/AmoxiAcClav";
import Tms from "@/components/componentsGroup/Tms";
import PenicillinV from "@/components/componentsGroup/PenicillinV";
import Paracetamol from "@/components/componentsGroup/Paracetamol";
import Ibuprofen from "@/components/componentsGroup/Ibuprofen";
import Dipyrone from "@/components/componentsGroup/Dipyrone";
import Mebendazole from "@/components/componentsGroup/Mebendazole";
import Diphenhydramine from "@/components/componentsGroup/Diphenhydramine";
import Cetirizine from "@/components/componentsGroup/Cetirizine";
import Diazepam from "@/components/componentsGroup/Diazepam";
import Lorazepam from "@/components/componentsGroup/Lorazepam";
import Levetiracetam from "@/components/componentsGroup/Levetiracetam";
import Valproate from "@/components/componentsGroup/Valproate";
import Phenytoin from "@/components/componentsGroup/Phenytoin";
import Midazolam from "@/components/componentsGroup/Midazolam";
import Betamethasone from "@/components/componentsGroup/Betamethasone";
import Dexamethasone from "@/components/componentsGroup/Dexamethasone";
import Hydrocortisone from "@/components/componentsGroup/Hydrocortisone";
import Metoclopramide from "@/components/componentsGroup/Metoclopramide";
import Azithromycin from "@/components/componentsGroup/Azithromycin";




export const componentChooser = (medicine) => {
    if (medicine === "amoxicillin") return <Amoxicillin />;
    if (medicine === "amoxicillin with clavulanic acid") return <AmoxiAcClav />;
    if (medicine === "azithromycin") return <Azithromycin />;
    if (medicine === "trimethoprim-sulfamethoxazole") return <Tms />;
    if (medicine === "penicillin V") return <PenicillinV />;
    if (medicine === "paracetamol") return <Paracetamol />;
    if (medicine === "ibuprofen") return <Ibuprofen />;
    if (medicine === "dipyrone") return <Dipyrone />;
    if (medicine === "mebendazole") return <Mebendazole />;
    if (medicine === "diphenhydramine") return <Diphenhydramine />;
    if (medicine === "cetirizine hydrochloride") return <Cetirizine />;
    if (medicine === "diazepam") return <Diazepam />;
    if (medicine === "lorazepam") return <Lorazepam />;
    if (medicine === "levetiracetam") return <Levetiracetam />;
    if (medicine === "sodium valproate") return <Valproate />;
    if (medicine === "phenytoin") return <Phenytoin />;
    if (medicine === "midazolam") return <Midazolam />;
    if (medicine === "betamethasone") return <Betamethasone />;
    if (medicine === "dexamethasone") return <Dexamethasone />;
    if (medicine === "hydrocortisone") return <Hydrocortisone />;
    if (medicine === "metoclopramide") return <Metoclopramide />;
    return <p>Sorry, we're working for you. </p>; // Manejo para medicamentos no encontrados
  };