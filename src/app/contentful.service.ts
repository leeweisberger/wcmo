import { Injectable } from '@angular/core';
import { createClient, Asset } from 'contentful';

import { environment } from '../environments/environment';
import { Attorney } from './attorneys/wcmoAttorneysComponent';

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken,
  });

  constructor() { }

  async getLawyers(): Promise<Attorney[]> {
    const res = await this.cdaClient.getEntries({
      content_type: environment.contentful.contentTypeIds.lawyer,
    });
    return res.items.map(i => i.fields as Attorney).map(a => ({
      ...a,
      picture: (a.picture as any as Asset).fields.file.url
    })
    );
  }
}
