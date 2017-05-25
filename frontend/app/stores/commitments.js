import { observable, action } from 'mobx';
import axiosAuth from 'utils/axiosWithAuthentication';

class Commitments {
  @observable items = [];
  @observable isFetching = false;

  constructor() {
    this.axios = axiosAuth.getInstance();
  }

  @action getAllCommitments() {
    this.isFetching = true;

    if (this.items) {
      let promise = new Promise();
      promise.resolve(this.items);
      return promise;
    }

    return this.axios
            .get('commitments')
            .then(res => {
              this.items = res.data.posts;
              this.isFetching = false;
              return this.items;
            });
  }

  @action addCommitment(commitment) {

    // We should make it an optimistic update in the future.
    this.items.push(commitment);
    return this.axios
            .put('commitments', { commitment });
  }

  @action updateCommitment(item) {
    return this.axios
            .post('commitments/' + item.id, { item });
  }

  @action removeCommitment(item) {
    let commitment = this.getCommitmentById(item.id);
    this.items.remove(commitment);
    return this.axios
            .delete('commitments/' + item.id,);
  }

  @action completeCommitment(item) {
    let commitment = this.getCommitmentById(item.id);
    commitment.completed = true;
    return this.updateCommitment(commitment);
  }

  getCommitmentById(id) {
    return this.items.find(c => c.id === id); // A workaround for mobx issue with arrays, there's probably a better way.
  }
}

export default new Commitments();
