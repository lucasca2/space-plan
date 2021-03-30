import React, { useEffect, useState } from 'react';
import Title from 'components/Title';
import { Formik } from 'formik';
import { useHistory, useParams } from 'react-router-dom';
import Input from 'components/Input';
import Select from 'components/Select';

import Button from 'components/Button';
import {
  getLaunchPads, getRockets, getShips, saveLaunches,
} from 'services/launch';
import { Form, WrapperActions } from './styles';
import { LaunchSchema } from './validate';

type TQueryParams = {
  id: string;
}

const SaveLaunch: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<TQueryParams>();
  const [rockets, setRockets] = useState([]);
  const [launchpads, setLaunchPads] = useState([]);
  const [ships, setShips] = useState([]);

  useEffect(() => {
    async function getInitialData() {
      const listRockets = await getRockets();
      const listLaunchPads = await getLaunchPads();
      const listShips = await getShips();

      setRockets(listRockets);
      setLaunchPads(listLaunchPads);
      setShips(listShips);
    }

    getInitialData();
  }, []);

  function onSubmit(values: any) {
    saveLaunches(values);

    history.push('/launches');
  }

  return (
    <>
      <Title text={id ? 'Edit Launch' : 'Create Launch'} />
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          mission_name: '',
          launch_date: '',
          launch_site: '',
          rocket: '',
          ships: '',
          details: '',
        }}
        validationSchema={LaunchSchema}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              name="mission_name"
              width={1 / 2}
              placeholder="Digit a mission name"
              label="Mission Name"
            />
            <Input
              name="launch_date"
              width={1 / 2}
              label="Date"
              type="datetime-local"
            />
            <Select
              options={launchpads}
              getOptionValue={(opt) => opt}
              getOptionLabel={(opt) => opt.name}
              name="launch_site"
              placeholder="Select a launch site"
              label="Site"
            />
            <Select
              options={rockets}
              getOptionValue={(opt) => opt}
              getOptionLabel={(opt) => opt.name}
              name="rocket"
              width={1 / 2}
              placeholder="Select a rocket"
              label="Rocket"
            />
            <Select
              multiple
              options={ships}
              getOptionValue={(opt) => opt}
              getOptionLabel={(opt) => opt.name}
              name="ships"
              width={1 / 2}
              placeholder="Select a ships"
              label="Ships"
            />
            <Input
              name="details"
              placeholder="Digit more details"
              label="Details"
            />
            <WrapperActions>
              <Button type="submit">Save</Button>
            </WrapperActions>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SaveLaunch;
