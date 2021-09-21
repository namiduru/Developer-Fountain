export default class City {
  constructor(
    public title: string,
    public content: string,
    public lat: string = '',
    public long: string = '',
    public image_url: string = '',
  ) {}

  getCity() {
    return {
      title: this.title,
      content: this.content,
      lat: this.lat,
      long: this.long,
      image_url: this.image_url,
    };
  }
}
