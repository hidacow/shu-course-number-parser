import { BiMap } from '.';
import * as Majors from './majors';

export const colleges: BiMap<BiMap<string>> = {
  '01': { ...Majors.collegeOfScience, ...Majors.collegeOfMechanics },
  '18': Majors.collegeOfMechanics,
  '02': {
    ...Majors.collegeOfLiberalArts,
    ...Majors.collegeOfSocialSciences,
    ...Majors.collegeOfCulturalHeritageAndInformationManagement,
  },
  '03': Majors.collegeOfForeignLanguages,
  '04': {
    ...Majors.collegeOfEconomics,
    ...Majors.collegeOfManagement,
    ...Majors.collegeOfCulturalHeritageAndInformationManagement,
  },
  '06': Majors.collegeOfLaw,
  '07': Majors.collegeOfCommunicationAndInformationEngineering,
  '08': Majors.collegeOfComputerScienceAndTechnology,
  '09': Majors.collegeOfMechanicalAndElectricalEngineeringAndAutomation,
  '10': Majors.collegeOfMaterialsScienceAndEngineering,
  '11': Majors.collegeOfEnvironmentalAndChemicalEngineering,
  '12': Majors.collegeOfLifeSciences,
  '13': Majors.collegeOfArts,
  '14': Majors.collegeOfFilm,
  '15': Majors.collegeOfSydney,
  '16': Majors.collegeOfMarxism,
  '17': Majors.collegeOfJournalismAndCommunication,
  '20': Majors.collegeOfInternationalEducation,
  '23': Majors.collegeOfSinoEuropeanEngineeringTechnology,
  '31': Majors.collegeOfMusic,
  '33': Majors.collegeOfQianWeichang,
  '36': Majors.collegeOfMicroelectronics,
  '37': Majors.collegeOfCulturalHeritageAndInformationManagement,
  '39': Majors.collegeOfLisbon,
  '00': Majors.collegeUniversal,
};
