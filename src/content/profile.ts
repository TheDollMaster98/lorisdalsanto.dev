import type { Profile } from "@/models/profile.model";

// Dati uguali in tutte le lingue.
export const profile: Profile = {
  name: "Loris Dal Santo",
  email: "lorisdalsanto@hotmail.it",
  links: [
    { label: "GitHub", href: "https://github.com/TheDollMaster98" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lorisdalsanto/" },
    {
      // File pubblico su Google Drive (CV_DAL_SANTO_LORIS_ITA.pdf).
      label: "CV",
      href: "https://drive.google.com/file/d/1DRSVMhs7hnijk0VCvv3weLuKQmz-AjGe/view",
    },
  ],
};
