import { useRecoilCallback } from 'recoil';
import { v4 } from 'uuid';

import { getSnapshotValue } from '@/ui/utilities/recoil-scope/utils/getSnapshotValue';
import { useGetCurrentView } from '@/views/hooks/useGetCurrentView';
import { useHandleViews } from '@/views/hooks/useHandleViews';
import { useCloseAndResetViewPicker } from '@/views/view-picker/hooks/useCloseAndResetViewPicker';
import { useViewPickerStates } from '@/views/view-picker/hooks/useViewPickerStates';

export const useViewPickerPersistView = () => {
  const {
    viewPickerInputNameState,
    viewPickerSelectedIconState,
    viewPickerIsPersistingState,
    viewPickerReferenceViewIdState,
    viewPickerKanbanFieldMetadataIdState,
    viewPickerTypeState,
  } = useViewPickerStates();

  const { createView, selectView, removeView, updateView } = useHandleViews();

  const { viewsOnCurrentObject } = useGetCurrentView();

  const { closeAndResetViewPicker } = useCloseAndResetViewPicker();

  const handleCreate = useRecoilCallback(
    ({ snapshot, set }) =>
      async () => {
        const name = getSnapshotValue(snapshot, viewPickerInputNameState);
        const iconKey = getSnapshotValue(snapshot, viewPickerSelectedIconState);
        const type = getSnapshotValue(snapshot, viewPickerTypeState);
        const kanbanFieldMetadataId = getSnapshotValue(
          snapshot,
          viewPickerKanbanFieldMetadataIdState,
        );
        const id = v4();
        set(viewPickerIsPersistingState, true);
        await createView({
          id,
          name,
          icon: iconKey,
          type,
          kanbanFieldMetadataId,
        });
        closeAndResetViewPicker();
        selectView(id);
      },
    [
      closeAndResetViewPicker,
      createView,
      selectView,
      viewPickerInputNameState,
      viewPickerIsPersistingState,
      viewPickerKanbanFieldMetadataIdState,
      viewPickerSelectedIconState,
      viewPickerTypeState,
    ],
  );

  const handleDelete = useRecoilCallback(
    ({ set, snapshot }) =>
      async () => {
        set(viewPickerIsPersistingState, true);
        const viewPickerReferenceViewId = getSnapshotValue(
          snapshot,
          viewPickerReferenceViewIdState,
        );

        selectView(
          viewsOnCurrentObject.filter(
            (view) => view.id !== viewPickerReferenceViewId,
          )[0].id,
        );
        await removeView(viewPickerReferenceViewId);
        closeAndResetViewPicker();
      },
    [
      closeAndResetViewPicker,
      removeView,
      selectView,
      viewPickerIsPersistingState,
      viewPickerReferenceViewIdState,
      viewsOnCurrentObject,
    ],
  );

  const handleUpdate = useRecoilCallback(
    ({ set, snapshot }) =>
      async () => {
        set(viewPickerIsPersistingState, true);

        const viewPickerReferenceViewId = getSnapshotValue(
          snapshot,
          viewPickerReferenceViewIdState,
        );
        const viewPickerInputName = getSnapshotValue(
          snapshot,
          viewPickerInputNameState,
        );
        const viewPickerSelectedIcon = getSnapshotValue(
          snapshot,
          viewPickerSelectedIconState,
        );

        await updateView({
          id: viewPickerReferenceViewId,
          name: viewPickerInputName,
          icon: viewPickerSelectedIcon,
        });
        selectView(viewPickerReferenceViewId);
        closeAndResetViewPicker();
      },
    [
      viewPickerIsPersistingState,
      viewPickerReferenceViewIdState,
      viewPickerInputNameState,
      viewPickerSelectedIconState,
      updateView,
      selectView,
      closeAndResetViewPicker,
    ],
  );

  return { handleCreate, handleDelete, handleUpdate };
};
