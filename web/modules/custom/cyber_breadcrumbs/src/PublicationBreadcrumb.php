<?php

namespace Drupal\cyber_breadcrumbs;

/**
 * @file
 * Generates the breadcrumb trail for content including:
 * - Publication
 *
 * In the format:
 * > Home
 * > Publication
 * > current-page-title
 *
 * > <front>
 * > /publications
 * > /current-page-title
 */
use Drupal\Core\Breadcrumb\Breadcrumb;
use Drupal\Core\Breadcrumb\BreadcrumbBuilderInterface;
use Drupal\Core\Controller\TitleResolverInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\Core\Link;
use Drupal\Core\Url;
use Drupal\node\NodeInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class PublicationBreadcrumb implements BreadcrumbBuilderInterface {

  /**
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;
  /**
   * Node object, or null if on a non-node page.
   *
   * @var \Drupal\node\Entity\Node
   */
  protected $node;
  /**
   * The title resolver.
   *
   * @var \Drupal\Core\Controller\TitleResolverInterface
   */
  protected $titleResolver;

  /**
   * Class constructor.
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager, TitleResolverInterface $title_resolver) {
    $this->entityTypeManager = $entity_type_manager;
    $this->titleResolver = $title_resolver;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('entity_type.manager'),
      $container->get('title_resolver')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function applies(RouteMatchInterface $route_match) {
    $match = FALSE;
    $route_name = $route_match->getRouteName();
    if ($route_name == 'entity.node.canonical') {
      $this->node = $route_match->getParameter('node');
      if ($this->node instanceof NodeInterface == FALSE) {
        $this->node = $this->entityTypeManager->getStorage('node')->load($this->node);
      }
      if (!empty($this->node)) {
        $match = $this->node->bundle() == 'publication';
      }
    }
    if ($route_name == 'view.publication_search_api.publication_search_api') {
      // Also match on news listing page.
      $match = TRUE;
    }
    return $match;
  }

  /**
   * {@inheritdoc}
   */
  public function build(RouteMatchInterface $route_match) {
    $breadcrumb = new Breadcrumb();
    $title_resolver = $this->titleResolver->getTitle(\Drupal::request(), $route_match->getRouteObject());
    if ($this->node) {
      $links[] = Link::createFromRoute(t('Home'), '<front>');
      $links[] = Link::fromTextandUrl(t('Publications'), Url::fromRoute('view.publication_search_api.publication_search_api'));
      $links[] = Link::createFromRoute($title_resolver, '<none>');
      $breadcrumb->setLinks($links);
    }
    $breadcrumb->addCacheContexts(['url.path']);
    return $breadcrumb;
  }

}
