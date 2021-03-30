import * as Yup from 'yup';

export const LaunchSchema = Yup.object().shape({
  mission_name: Yup.string().required('Required'),
  launch_date: Yup.string().required('Required'),
  launch_site: Yup.object().required('Required'),
  rocket: Yup.object().required('Required'),
  ships: Yup.array().required('Required'),
  details: Yup.string().required('Required'),
});
