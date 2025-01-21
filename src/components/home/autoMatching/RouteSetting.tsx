import {
  Control,
  useWatch,
  Controller,
  UseFormSetValue,
} from 'react-hook-form';
import Button from '@/components/commons/Button';
import RouteSettingIcon from '@/assets/icon/routeSettingIcon.svg?react';
import RouteChangeIcon from '@/assets/icon/routeChangeIcon.svg?react';
import { Path } from 'react-hook-form';
import { MatchingSchema } from 'gachTaxi-types';

interface RouteSettingProps<T extends MatchingSchema> {
  control: Control<T>;
  setValue: UseFormSetValue<T>;
}

const RouteSetting = <T extends MatchingSchema>({
  control,
  setValue,
}: RouteSettingProps<T>) => {
  const startName = useWatch({ control, name: 'startName' as Path<T> });
  const destinationName = useWatch({
    control,
    name: 'destinationName' as Path<T>,
  });
  const startPoint = useWatch({ control, name: 'startPoint' as Path<T> });
  const destinationPoint = useWatch({
    control,
    name: 'destinationPoint' as Path<T>,
  });

  const handleSwap = () => {
    setValue('startName' as Path<T>, destinationName);
    setValue('destinationName' as Path<T>, startName);

    setValue('startPoint' as Path<T>, destinationPoint);
    setValue('destinationPoint' as Path<T>, startPoint);
  };

  return (
    <Controller
      control={control}
      name={'startName' as Path<T>}
      render={({
        field: { value: startName, onChange: onChangeStartName },
      }) => (
        <Controller
          control={control}
          name={'destinationName' as Path<T>}
          render={({
            field: {
              value: destinationName,
              onChange: onChangeDestinationName,
            },
          }) => (
            <div className="h-[101px] w-full flex-shrink-0 bg-secondary rounded-box p-vertical gap-3 flex items-center justify-between">
              <div className="flex-shrink-0">
                <RouteSettingIcon />
              </div>
              <div className="flex-1 flex flex-col justify-between h-full w-full">
                <input
                  className="font-medium text-captionHeader bg-transparent outline-none w-full"
                  value={startName}
                  onChange={(e) => onChangeStartName(e.target.value)}
                  readOnly
                />
                <div className="border border-matchLine w-full rounded-full"></div>
                <input
                  className="font-medium text-captionHeader bg-transparent outline-none w-full"
                  value={destinationName}
                  onChange={(e) => onChangeDestinationName(e.target.value)}
                  readOnly
                />
              </div>
              <div className="flex-shrink-0">
                <Button variant="icon" onClick={handleSwap}>
                  <RouteChangeIcon />
                </Button>
              </div>
            </div>
          )}
        />
      )}
    />
  );
};

export default RouteSetting;
