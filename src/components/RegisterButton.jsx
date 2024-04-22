import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useRegister } from '../hooks/useRegister';
import { domainDetails } from '../types';
import { Button } from './Button';
import { useState } from 'react';

export const RegisterButton = ({ details }) => {
  const [loading, setLoading] = useState(false);
  const register = useRegister(details);
  const client = useQueryClient();

  const onClick = () => {
    setLoading(true);
    register()
      .then(() => {
        toast.success('Domain registered');
        client.refetchQueries();
      })
      .catch((e) => {
        toast.error(e.cause?.shortMessage || e.cause?.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Button onClick={onClick} loading={loading}>
      Register
    </Button>
  );
};

RegisterButton.propTypes = {
  details: domainDetails,
};
