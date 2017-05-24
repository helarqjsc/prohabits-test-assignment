import { observable, action } from 'mobx';
import axios from 'axios';
import { API_URL } from 'utils/constants';

class Commitments {
  @observable items = [];
  @observable isFetching = false;

  @action getAllCommitments() {
    this.isFetching = true;

    if (this.items) {
      let promise = new Promise();
      promise.resolve(this.items);
      return promise;
    }

    axios
      .get(API_URL + '/commitments')
      .then(res => {
        this.items = res.data.posts;
        this.isFetching = false;
        return this.items;
      });
  }

  @action addCommitment(commitment) {

    // We should make it an optimistic update in the future.
    this.items.push(commitment);
    axios
      .put(API_URL + '/commitments', { commitment });
  }

  @action updateCommitment(item) {
    axios
      .post(API_URL + '/commitments/' + item.id, { item });
  }

  @action completeCommitment(item) {
    let commitment = this.getCommitmentById(item.id);
    commitment.completed = true;
    this.updateCommitment(commitment);
  }

  getCommitmentById(id) {
    return this.items.find(c => c.id === id); // A workaround for mobx issue with arrays, there's probably a better way.
  }
}

export default new Commitments();
